package com.rjchaves.shiro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rjchaves.shiro.entities.Product;
import com.rjchaves.shiro.repository.ProductRepository;

@RestController
@RequestMapping("product")
@CrossOrigin
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@RequestMapping("/")
	public @ResponseBody List<Product> find() {
		return productRepository.findAll();
	}
}
