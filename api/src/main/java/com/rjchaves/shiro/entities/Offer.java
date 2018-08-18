package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class Offer {
	
	@Id
	private Long id;
	
	@OneToOne(optional=false)
	private Producer producer;
	
	@OneToOne(optional=false)
	private Product product;
	
	@OneToOne(optional=false)
	private Unit unit;
	
	private Long quantity;
	
	
}
