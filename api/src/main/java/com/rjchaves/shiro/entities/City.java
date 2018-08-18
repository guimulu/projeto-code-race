package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class City {
	
	@Id
	private Long id;
	
	private String name;
	
	@OneToOne(optional=true)
	private UF uf;
}
