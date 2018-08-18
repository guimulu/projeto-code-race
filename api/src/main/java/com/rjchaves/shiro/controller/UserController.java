package com.rjchaves.shiro.controller;

import java.util.Calendar;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rjchaves.shiro.entities.Token;
import com.rjchaves.shiro.entities.User;
import com.rjchaves.shiro.repository.TokenRepository;
import com.rjchaves.shiro.repository.UserRepository;

@RestController
@RequestMapping("user")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TokenRepository tokenRepository;
	
	@PostMapping("/generatetoken")
	public ResponseEntity<Token> login(@RequestBody User user) {
		Optional<User> userOptional = userRepository.findByLoginAndPassword(user.getLogin(), user.getPassword());
		if(!userOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		Token token = new Token();
		token.setUser(userOptional.get());
		
		Calendar creationDate = Calendar.getInstance(); 
		token.setLoginDate(creationDate);
		
		Calendar expirationDate = Calendar.getInstance();
		expirationDate.add(Calendar.DAY_OF_MONTH, 30);
		
		token.setExpirationDate(expirationDate);
		token.setToken(SecurityUtils.generateAuthToken());
		
		tokenRepository.save(token);
		return ResponseEntity.ok(token);
	}

}
