package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;

@Entity
@Data
public class User {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String name;
	
	@JsonProperty(access=Access.WRITE_ONLY)
	private String password;

	private String email;
	
	@OneToOne
	private Consumer consumer;
	
	@OneToOne
	private Producer producer;
	
}
