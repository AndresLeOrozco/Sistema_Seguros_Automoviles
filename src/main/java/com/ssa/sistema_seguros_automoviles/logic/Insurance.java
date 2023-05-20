package com.ssa.sistema_seguros_automoviles.logic;

import java.util.List;
import java.util.ArrayList;

/**
 *
 * @author andre
 */
public class Insurance {
    Integer id;
    Integer id_vehicle;
    String pay_meth;
    String vin;
    List<Coverage> cover;

    public Insurance() {
    }


    public Insurance(Integer id_vehicle, String pay_meth, String vin) {
        this.id_vehicle = id_vehicle;
        this.pay_meth = pay_meth;
        this.vin = vin;
        this.cover = new ArrayList();
    }


    public List<Coverage> getCover() {
        return cover;
    }

    public void setCover(List<Coverage> cover) {
        this.cover = cover;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId_vehicle() {
        return id_vehicle;
    }

    public void setId_vehicle(Integer id_vehicle) {
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
        return "Insurance{" + "id=" + id + ", id_vehicle=" + id_vehicle + ", pay_meth=" + pay_meth + ", vin=" + vin + "\n, cover=" + cover + '}';
    }
}
