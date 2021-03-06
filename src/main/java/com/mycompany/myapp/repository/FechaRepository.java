package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Fecha;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Fecha entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FechaRepository extends JpaRepository<Fecha, Long> {

}
