package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.Unit;

@Repository
public interface OfferRepository extends JpaRepository<Unit, Long> {
	
}