package com.rjchaves.shiro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rjchaves.shiro.entities.City;
import com.rjchaves.shiro.repository.CityRepository;

@RestController
@RequestMapping("city")
@CrossOrigin
public class CityController {
	
	@Autowired
	private CityRepository cityRepository;
	
	
	@PostMapping("/")
	public List<City> cities() {
		return cityRepository.findAll();
	}
}
