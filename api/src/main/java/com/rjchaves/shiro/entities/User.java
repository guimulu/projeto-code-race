package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class User {
	
	@Id
	private Long id;
	
	private String login;
	
	@JsonIgnore
	private String password;
	private String email;
	private String token;
	
	@OneToOne(optional=false)
	private City city;
	
}
