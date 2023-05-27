package com.ssa.sistema_seguros_automoviles.logic;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "coverage")
public class Coverage implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_category", referencedColumnName = "id")
    Category cat;
    @Column
    String description;
    @Column
    Integer min_cost;
    @Column
    float per_cost;
    @ManyToMany(fetch = FetchType.EAGER, mappedBy = "cover")
    Set<Insurance> ins;

    public Coverage(Category id_category, String description, Integer min_cost, float per_cost) {
        this.cat = id_category;
        this.description = description;
        this.min_cost = min_cost;
        this.per_cost = per_cost;
    }

    public Set<Insurance> getIns() {
        return ins;
    }

    public void setIns(Set<Insurance> ins) {
        this.ins = ins;
    }

    public Coverage(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id_cov) {
        this.id = id_cov;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCat() {
        return cat;
    }

    public void setCat(Category cat) {
        this.cat = cat;
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
        return "Coverage{" + "id=" + id + ", Categories=" + ", description=" + description + ", min_cost=" + min_cost + ", per_cost=" + per_cost + '}';
    }

}