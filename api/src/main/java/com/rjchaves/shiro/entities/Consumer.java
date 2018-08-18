package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Consumer {
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	private City cityReceiver;
	
	private String districtReceiver;
	private String streetReceiver;
	private String numberReceiver;
	private String complementReceiver; 
	
}
