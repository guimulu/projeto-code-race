package com.rjchaves.shiro.controller;

import java.util.Calendar;
import java.util.List;
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
import com.rjchaves.shiro.entities.Offer;
import com.rjchaves.shiro.entities.Token;
import com.rjchaves.shiro.repository.ConsumerRepository;
import com.rjchaves.shiro.repository.OfferRepository;
import com.rjchaves.shiro.repository.ProducerRepository;
import com.rjchaves.shiro.repository.ProductRepository;
import com.rjchaves.shiro.repository.TokenRepository;
import com.rjchaves.shiro.repository.UnitRepository;
import com.rjchaves.shiro.repository.UserRepository;

@RestController
@RequestMapping("offer")
@CrossOrigin
public class OfferController {
	
	@Autowired
	private TokenRepository tokenRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UnitRepository unitRepository;
	
	@Autowired
	private ProducerRepository producerRepository;
	
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private OfferRepository offerRepository;
	
	@PostMapping("/register")
	public ResponseEntity<Offer> registerOffer(@RequestBody OfferDto offerDto) {
		Optional<Token> optionalToken = tokenRepository.findByTokenAndExpirationDateGreaterThan(offerDto.getToken(), Calendar.getInstance());
		if(!optionalToken.isPresent()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
		
		Offer offer = new Offer();
		offer.setProducer(producerRepository.findById(offerDto.getOffer().getProducer().getId()).get());
		
		offer.setProduct(productRepository.findById(offerDto.getOffer().getProduct().getId()).get());
		offer.setUnit(unitRepository.findById(offerDto.getOffer().getUnit().getId()).get());
		offer.setQuantity(offerDto.getOffer().getQuantity());
		
		return ResponseEntity.ok().body(offerRepository.save(offer));
	}
	
	@RequestMapping("/")
	public List<Offer> listOffer() {
		return offerRepository.findAll();
	}
	
	
}
