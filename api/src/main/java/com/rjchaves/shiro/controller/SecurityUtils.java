package com.rjchaves.shiro.controller;

import java.util.Calendar;
import java.util.UUID;

class SecurityUtils {
	public static String generateAuthToken() {
		StringBuilder sb = new StringBuilder();
		sb.append(UUID.randomUUID().toString().toUpperCase());
		sb.append("|");
		sb.append("userid");
		sb.append("|");
		sb.append(Calendar.getInstance().getTimeInMillis());
		return sb.toString();
	}
}
