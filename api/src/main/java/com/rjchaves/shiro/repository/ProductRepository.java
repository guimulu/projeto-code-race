package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
}
