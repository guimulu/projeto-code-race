package com.rjchaves.shiro.entities;

import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Token {
	
	@Id
	private Long id;
	
	private Calendar expirationDate;
	private Calendar loginDate;
	private String token;
	
	@ManyToOne(optional=false)
	private User user;
}
