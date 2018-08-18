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

import com.rjchaves.shiro.dto.OfferDto;
import com.rjchaves.shiro.entities.Token;
import com.rjchaves.shiro.entities.User;
import com.rjchaves.shiro.repository.TokenRepository;
import com.rjchaves.shiro.repository.UserRepository;

import javassist.tools.web.BadHttpRequest;

@RestController
@RequestMapping("offer")
@CrossOrigin
public class OfferController {
	
	@Autowired
	private TokenRepository tokenRepository;
	
	@Autowired
	private UserRepository userRepository;
	
//	@PostMapping("/register")
//	public ResponseEntity<User> registerUser(@RequestBody OfferDto offerDto) {
//		Optional<Token> optionalToken = tokenRepository.findByTokenAndExpirationDateGreaterThan(offerDto.getToken(), Calendar.getInstance());
//		if(!optionalToken.isPresent()) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
//		}
//		
//		return ResponseEntity.ok().body(userRepository.save(user));
//	}
	
	
}
