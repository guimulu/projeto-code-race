package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class ProductDetail {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	
	@ManyToOne
	private Product product;
}
