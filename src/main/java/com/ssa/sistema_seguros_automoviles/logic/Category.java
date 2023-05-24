package com.ssa.sistema_seguros_automoviles.logic;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "category")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column
    String type;
    @Column
    String description;


    public Category(String type, String description) {
        this.type = type;
        this.description = description;
    }

    public Category() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id_cat) {
        this.id = id_cat;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Categories{" + "id=" + id + ", type=" + type + ", description=" + description + '}';
    }



}