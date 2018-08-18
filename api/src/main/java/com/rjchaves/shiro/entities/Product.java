package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class Product {
	
	@Id
	private Long id;
	
	@OneToOne(optional=false)
	private ProductType productType;
}
