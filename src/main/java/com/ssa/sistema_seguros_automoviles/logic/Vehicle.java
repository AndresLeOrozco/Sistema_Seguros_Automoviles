package com.ssa.sistema_seguros_automoviles.logic;

public class Vehicle {
    int id;
    String brand;
    String model;
    int year;
    String img;

    public Vehicle(String brand, String model, int year, String img) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.img = img;
    }

    public Vehicle() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    @Override
    public String toString() {
        return "Vehicle{" + "id=" + id + ", brand=" + brand + ", model=" + model + ", year=" + year + ", img=" + img + '}';
    }



}