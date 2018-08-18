package com.rjchaves.shiro.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rjchaves.shiro.entities.Product;
import com.rjchaves.shiro.entities.Unit;
import com.rjchaves.shiro.repository.ProductRepository;
import com.rjchaves.shiro.repository.UnitRepository;

@RestController
@RequestMapping("product")
@CrossOrigin
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private UnitRepository unitRepository;
	
	
	@RequestMapping("/")
	public @ResponseBody List<Product> find() {
		return productRepository.findAll();
	}
	
	@RequestMapping("/unit")
	public @ResponseBody List<Unit> findUnit() {
		return unitRepository.findAll();
	}
	
	@RequestMapping("/{id}")
	public ResponseEntity<Product> findById(@PathVariable Long id) {
		Optional<Product> product = productRepository.findById(id);
		if(!product.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		return ResponseEntity.ok(product.get());
	}
}
