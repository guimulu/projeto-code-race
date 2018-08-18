package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
public class User {
	
	@Id
	private Long id;
	
	@Getter @Setter 
	private String login;
	
	private String password;

	@Getter @Setter 
	private String email;
	
	@OneToOne(optional=false)
	@Getter @Setter 
	private City city;
	
	@JsonIgnore
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
