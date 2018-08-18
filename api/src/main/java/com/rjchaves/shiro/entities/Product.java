package com.rjchaves.shiro.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Product {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String Name;
	
	@OneToMany
	@JoinColumn(name = "product_id")
	private List<ProductDetail> productDetail;
}
