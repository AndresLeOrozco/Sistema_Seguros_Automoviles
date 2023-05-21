package com.ssa.sistema_seguros_automoviles.logic;

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
    Integer id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_vehicle", referencedColumnName = "id")
    Vehicle id_vehicle;
    @Column
    String pay_meth;
    @Column
    String vin;
    @ManyToMany(fetch = FetchType.EAGER, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE,

    })
    @JoinTable(
            name = "ins_cov",
            joinColumns = {@JoinColumn(name = "id_ins")},
            inverseJoinColumns = {@JoinColumn(name = "id_cov")}
    )
    Set<Coverage> cover;
    public Insurance() {
    }


    public Insurance(Vehicle id_vehicle, String pay_meth, String vin) {
        this.id_vehicle = id_vehicle;
        this.pay_meth = pay_meth;
        this.vin = vin;
        //this.cover = new ArrayList();
    }

    public Set<Coverage> getCover() {
        return cover;
    }

    public void setCover(Set<Coverage> cover) {
        this.cover = cover;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Vehicle getId_vehicle() {
        return id_vehicle;
    }

    public void setId_vehicle(Vehicle id_vehicle) {
        this.id_vehicle = id_vehicle;
    }

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

    @Override
    public String toString() {
        return "Insurance{" + "id=" + id + ", id_vehicle=" + id_vehicle + ", pay_meth=" + pay_meth + ", vin=" + vin + "\n, cover=}";
    }
}
