package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import com.ssa.sistema_seguros_automoviles.logic.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class serviceVehicle {
    private static final String LOCATION="C:/AAA/seguros/";
    @Autowired
    VehicleRepo vehicleRepo;
    @Transactional
    public List<Vehicle> findVehicle() {
        return vehicleRepo.findAll();
    }

    @Transactional
    public void saveImg(Integer id, MultipartFile file) throws Exception {
        try {
            String directory = LOCATION;
            String filename = String.valueOf(id);
            Path directoryPath = Path.of(directory);
            if (!Files.exists(directoryPath)) {
                Files.createDirectories(directoryPath);
            }

            Path imagePath = Path.of(directory, filename);
            Files.copy(file.getInputStream(), imagePath, StandardCopyOption.REPLACE_EXISTING);

        } catch (IOException e) {
        }
    }

    @Transactional
    public ResponseEntity<byte[]> getImage(Integer id) throws IOException {

        Path imagePath = Paths.get(LOCATION+id);
        byte[] imageBytes = Files.readAllBytes(imagePath);

        // Configurar las cabeceras de la respuesta
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG);

        // Devolver la respuesta con la imagen y las cabeceras adecuadas
        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    @Transactional
    public boolean save(Vehicle c) {
        Vehicle n = new Vehicle();
        n = vehicleRepo.findVehicleByBrandAndModelAndYear(n.getBrand(),n.getModel(),n.getYear());
        System.out.println(n.toString());
        if (n == null){
            vehicleRepo.save(c);
            return true;
        }
        return false;
    }

    @Transactional
    public Vehicle findbyBrMo(String br,String mo) {
        return vehicleRepo.findVehicleByBrandAndModel(br,mo);
    }

    @Transactional
    public Vehicle findByBMY(String brand, String model, int year){return vehicleRepo.findVehicleByBrandAndModelAndYear(brand, model, year);}


}