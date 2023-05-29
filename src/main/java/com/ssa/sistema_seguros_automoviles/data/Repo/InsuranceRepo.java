package com.ssa.sistema_seguros_automoviles.data.Repo;


import com.ssa.sistema_seguros_automoviles.logic.Insurance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InsuranceRepo extends JpaRepository<Insurance,Integer> {
    @Override
    List<Insurance> findAll();


    Insurance findById(int id);

    Insurance findByVin(String vin);

    List<Insurance> findAllByIdClient(int id);
    @Modifying
    @Query(value = "INSERT INTO Insurances_Web.Insurance (id_vehicle, pay_meth, vin, id_client, cost, date) " +
            "VALUES (:id_vehicle, :pay_meth, :vin, :id_client, :cost, :date)",
            nativeQuery = true)
    void insertInsurance(@Param("id_vehicle") int idVehicle, @Param("pay_meth") String payMethod,
                        @Param("vin") String vin, @Param("id_client") int idClient, @Param("cost") float cost,
                        @Param("date") String date);

    @Modifying
    @Query(value = "INSERT INTO Insurances_Web.Ins_Cov (id_cov, id_ins) " +
            "VALUES (:id_cov, :id_ins)",
            nativeQuery = true)
    void insertInsCov(@Param("id_cov") int idCov, @Param("id_ins") int idIns);

}
