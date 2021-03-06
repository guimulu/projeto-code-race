package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
	
}
