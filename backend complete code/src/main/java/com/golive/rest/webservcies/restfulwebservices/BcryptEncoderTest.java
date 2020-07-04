package com.golive.rest.webservcies.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		

		//assign to a new variable
		BCryptPasswordEncoder encoder= new BCryptPasswordEncoder();

		for(int i=1; i<=10; i++){

		//assign to a new variable
		String encodedString= encoder.encode("password");
		System.out.println((encodedString));
		}

	}
//	o/p: $2a$10$LmJQUWgzAvWQ.LLwAb6NI.RjuGEihVuRTdv/baX6FXesuwCKfH08W

}
