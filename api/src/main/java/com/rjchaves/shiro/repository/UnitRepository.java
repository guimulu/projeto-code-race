package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.City;

@Repository
public interface UnitRepository extends JpaRepository<City, Long> {
	
}
