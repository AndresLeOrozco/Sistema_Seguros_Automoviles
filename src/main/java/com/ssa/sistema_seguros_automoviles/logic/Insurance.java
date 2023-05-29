package com.ssa.sistema_seguros_automoviles.logic;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;
import java.util.ArrayList;
import java.util.Set;

@Entity
@Table(name = "insurance")
public class Insurance implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "id_vehicle")
    int idVehicle;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(insertable=false, updatable=false, name = "id_vehicle", referencedColumnName = "id")
    Vehicle id_vehicle;
    @Column(name = "pay_meth")
    String pay_meth;
    @Column(name = "vin")
    String vin;
    @Column(name = "id_client")
    int idClient;
    @Column(name = "cost")
    float cost;
    @Column(name = "date")
    String date;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(
            name = "ins_cov",
            joinColumns = {@JoinColumn(name = "id_ins")},
            inverseJoinColumns = {@JoinColumn(name = "id_cov")}
    )
    Set<Coverage> cover;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(insertable=false, updatable=false, name="id_client", referencedColumnName = "id")
    Client client;


    public Insurance() {
    }

    public int getIdvehicle() {
        return idVehicle;
    }

    public void setIdvehicle(int idvehicle) {
        this.idVehicle = idvehicle;
    }

    public int getIdClient() {
        return idClient;
    }

    public void setIdClient(int idClient) {
        this.idClient = idClient;
    }

    public float getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

//    public Client getClient() {
//        return client;
//    }

//    public void setClient(Client client) {
//        this.client = client;
//    }

    public Set<Coverage> getCover() {
        return cover;
    }

//    public void setCover(Set<Coverage> cover) {
//        this.cover = cover;
//    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Vehicle getId_vehicle() {
        return id_vehicle;
    }

//    public void setId_vehicle(Vehicle id_vehicle) {
//        this.id_vehicle = id_vehicle;
//    }

    public String getPay_meth() {
        return pay_meth;
    }

    public void setPay_meth(String pay_meth) {
        this.pay_meth = pay_meth;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public void setIdVehicle(int idVehicle) {
        this.idVehicle = idVehicle;
    }

    @Override
    public String toString() {
        return "Insurance{" +
                "id=" + id +
                ", idVehicle=" + idVehicle +
                ", pay_meth='" + pay_meth + '\'' +
                ", vin='" + vin + '\'' +
                ", idClient=" + idClient +
                ", cost=" + cost +
                ", date='" + date + '\'' +
                ", cover=" + cover +
                '}';
    }
}
