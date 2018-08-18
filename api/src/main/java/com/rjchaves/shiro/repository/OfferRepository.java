package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long> {
	
}
