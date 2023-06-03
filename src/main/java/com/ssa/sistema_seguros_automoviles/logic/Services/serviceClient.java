package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.*;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class serviceClient {
    @Autowired
    ClientRepo clientRepo;
    @Transactional
    public List<Client> find() {
        return clientRepo.findAll();
    }

    @Transactional
    public Client findBy(String us,String pas) {
        return clientRepo.findClientByUserAndPassword(us,pas);
    }

    @Transactional
    public boolean save(Client c) {
        Client n = new Client();
        n = clientRepo.findByUser(c.getUser());
        if (n == null){
            clientRepo.save(c);
            return true;
        }
        return false;
    }
    @Transactional
    public Client update(Client c){
            System.out.println(c.toString());
            clientRepo.save(c);
            c = clientRepo.findClientById(c.getId());
            return c;
    }
    @Transactional
    public String generateToken(UserDetails userDetails) {
        // Configurar las claims y la firma del token
        String secretKey = "mySecretKey"; // Clave secreta para firmar el token
        int expirationTimeInMinutes = 60; // Tiempo de expiración del token en minutos

        return Jwts.builder()
                .setSubject(userDetails.getUsername()) // Establecer el nombre de usuario como subject del token
                .claim("roles", userDetails.getAuthorities()) // Agregar roles o autoridades como claim del token
                .setExpiration(new Date(System.currentTimeMillis() + expirationTimeInMinutes * 60 * 1000)) // Establecer la fecha de expiración del token
                .signWith(SignatureAlgorithm.HS256, secretKey) // Firmar el token con la clave secreta y el algoritmo de firma
                .compact(); // Generar el token como una cadena compacta
    }



}
