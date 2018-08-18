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

import com.rjchaves.shiro.dto.UserDto;
import com.rjchaves.shiro.entities.Token;
import com.rjchaves.shiro.entities.User;
import com.rjchaves.shiro.repository.CityRepository;
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
	
	@Autowired
	private CityRepository cityRepository;
	
	
	@PostMapping("/generatetoken")
	public ResponseEntity<Token> login(@RequestBody User user) {
		Optional<User> userOptional = userRepository.findByEmailAndPassword(user.getLogin(), user.getPassword());
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
	
	@PostMapping("/auth")
	public ResponseEntity<Token> revalidateToken(@RequestBody Token token) {
		Optional<Token> optionalToken = tokenRepository.findByTokenAndExpirationDateGreaterThan(token.getToken(), Calendar.getInstance());
		
		if (!optionalToken.isPresent() ) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
		return ResponseEntity.ok().body(null);
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		Optional<User> optionalUser = userRepository.findByEmail(user.getEmail());
		if (!optionalUser.isPresent()) {
			return ResponseEntity.badRequest().body(null);
		}
		return ResponseEntity.ok().body(userRepository.save(user));
	}
	
	@PostMapping("/profile")
	public ResponseEntity<User> updateProfile(@RequestBody UserDto userDto) {
		
		Optional<Token> optionalToken = tokenRepository.findByTokenAndExpirationDateGreaterThan(userDto.getToken(), Calendar.getInstance());
		if(!optionalToken.isPresent()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
		if(userDto.getUser() != null) {
			
			Optional<User> optionalUser = userRepository.findById(userDto.getUser().get().getId());
			if (optionalUser.isPresent()) {
				return ResponseEntity.badRequest().body(null);
			}
			User oldUser = optionalUser.get();
			oldUser.setConsumer(userDto.getUser().get().getConsumer());
			oldUser.setProducer(userDto.getUser().get().getProducer());
			
			userRepository.save(oldUser);
			return ResponseEntity.ok().body(oldUser);
		}
		return ResponseEntity.ok().body(optionalToken.get().getUser());
	}
	
	

}
