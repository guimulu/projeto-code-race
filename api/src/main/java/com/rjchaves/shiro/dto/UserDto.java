package com.rjchaves.shiro.dto;

import java.util.Optional;

import com.rjchaves.shiro.entities.User;

import lombok.Data;

@Data
public class UserDto {
	private String token;
	
	private Optional<User> user; 
}
