package com.example.kupong;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.kupong.Model.Coupon;
import com.example.kupong.Repository.CouponRepo;

@SpringBootApplication
public class KupongApplication {

	public static void main(String[] args) {
		SpringApplication.run(KupongApplication.class, args);
	}

	@Bean
	public CommandLineRunner POJO(CouponRepo cupongRepo) {
		return args -> {

			Coupon c50 = new Coupon(50, true, "2026-02-05", "fifty");
			Coupon c100 = new Coupon(100, true, "2026-03-05", "one hundred");
			Coupon c200 = new Coupon(200, true, "2026-04-05", "two hundred");

			cupongRepo.save(c50);
			cupongRepo.save(c100);
			cupongRepo.save(c200);

		};

	}
}