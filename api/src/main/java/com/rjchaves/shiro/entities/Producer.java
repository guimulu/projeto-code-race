package com.rjchaves.shiro.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Producer {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@OneToMany(fetch=FetchType.EAGER)
	List<City> attendedCities;
}
