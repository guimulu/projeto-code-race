package com.rjchaves.shiro.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class User {
	
	@Id
	private Long id;
	
	private String login;
	
	private String password;
}
