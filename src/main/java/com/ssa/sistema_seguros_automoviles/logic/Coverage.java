package com.ssa.sistema_seguros_automoviles.logic;

public class Coverage {
    Integer id;
    Integer id_category;
    String description;
    Integer min_cost;
    float per_cost;

    public Coverage(Integer id_category, String description, Integer min_cost, float per_cost) {
        this.id_category = id_category;
        this.description = description;
        this.min_cost = min_cost;
        this.per_cost = per_cost;
    }

    public Coverage(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId_category() {
        return id_category;
    }

    public void setId_category(Integer id_category) {
        this.id_category = id_category;
    }

    public String getDescrption() {
        return description;
    }

    public void setDescrption(String descrption) {
        this.description = descrption;
    }

    public Integer getMin_cost() {
        return min_cost;
    }

    public void setMin_cost(Integer min_cost) {
        this.min_cost = min_cost;
    }

    public float getPer_cost() {
        return per_cost;
    }

    public void setPer_cost(float per_cost) {
        this.per_cost = per_cost;
    }

    @Override
    public String toString() {
        return "Coverage{" + "id=" + id + ", id_category=" + id_category + ", description=" + description + ", min_cost=" + min_cost + ", per_cost=" + per_cost + '}';
    }


}