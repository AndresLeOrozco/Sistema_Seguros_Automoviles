package com.ssa.sistema_seguros_automoviles.Controller;

import com.ssa.sistema_seguros_automoviles.data.Repo.VehicleRepo;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import com.ssa.sistema_seguros_automoviles.logic.Services.serviceVehicle;
import com.ssa.sistema_seguros_automoviles.logic.Vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController()
@RequestMapping("vehicle")
public class VehicleController {
    @Autowired
    serviceVehicle c;
    @Autowired
    VehicleRepo vehicleRepo;

    @CrossOrigin
    @GetMapping(value="")
    public List<Vehicle> find() {
        return c.findVehicle();
    }

    @CrossOrigin
    @GetMapping(value="car/{model}/{brand}")
    public Vehicle findByModel(@PathVariable String model,@PathVariable String brand) {
        return c.findbyBrMo(brand,model);
    }

    @CrossOrigin
    @PostMapping(value = "img/{id}")
    public void createImage(@PathVariable Integer id, @RequestParam("image") MultipartFile file) throws Exception {
        c.saveImg(id,file);
    }

    @CrossOrigin
    @GetMapping(value = "{id}/img")
    public ResponseEntity<byte[]> obtenerImagen(@PathVariable Integer id) throws IOException {
       return c.getImage(id);
    }

    @CrossOrigin
    @PostMapping
    public int save(@RequestBody Vehicle v) {
        try{
            if(this.c.save(v))
                return 1;
        }catch(Exception e){
            System.out.println(e.toString());
        }
        return 0;
    }





}
