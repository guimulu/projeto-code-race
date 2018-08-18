package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class UF {

	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	private String initials;
	
}
