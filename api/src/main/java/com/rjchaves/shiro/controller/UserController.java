package com.rjchaves.shiro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rjchaves.shiro.entities.User;

@RestController
public class UserController {
	
	@GetMapping("/user")
	public User user() {
		User u = new User();
		u.setId(1L);
		u.setLogin("hue");
		u.setPassword("password");
		return u;
	}
}
