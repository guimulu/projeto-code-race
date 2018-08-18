package com.rjchaves.shiro.dto;

import com.rjchaves.shiro.entities.Offer;

import lombok.Data;

@Data
public class OfferDto {
	private String token;
	
	private Offer offer; 
}
