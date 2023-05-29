package com.ssa.sistema_seguros_automoviles.logic;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssa.sistema_seguros_automoviles.data.Repo.ClientRepo;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 *
 * @author andre
 */
@Entity
@Table(name = "client")
public class Client implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column
    String user;
    @Column
    String password;
    @Column
    String name;
    @Column
    long phone;
    @Column
    String email;
    @Column
    Integer type_cli;
    @OneToMany(mappedBy = "client",fetch = FetchType.EAGER)
    @JsonManagedReference
    Set<Insurance> insurances;

    public Client(Integer id,String username, String password, String name, Integer num_telefono, String mail,Integer tc) {
        this.id = id;
        this.user = username;
        this.password = password;
        this.name = name;
        this.phone = num_telefono;
        this.email = mail;
        this.type_cli = tc;
    }

    public Client(String user, String password, String name, Integer phone, String email, Integer type_cli) {

        this.user = user;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.type_cli = type_cli;
    }

    public Client() {
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Insurance> getInsurances() {
        return insurances;
    }

//    public void setInsurances(Set<Insurance> insurances) {
//        this.insurances = insurances;
//    }

    public String getUsername() {
        return user;
    }

    public Integer getType_cli() {
        return type_cli;
    }

    public void setType_cli(Integer type_cli) {
        this.type_cli = type_cli;
    }

    public void setUsername(String username) {
        this.user = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getNum_telefono() {
        return phone;
    }

    public void setNum_telefono(long num_telefono) {
        this.phone = num_telefono;
    }

    public String getMail() {
        return email;
    }

    public void setMail(String mail) {
        this.email = mail;
    }

    public Integer getType_client() {
        return type_cli;
    }

    public void setType_client(Integer type_client) {
        this.type_cli = type_client;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Client{" + "username=" + user + ", password=" + password + ", name=" + name + ", num_telefono=" + phone + ", mail=" + email + ", type_client=" + type_cli + '}';
    }
}