package com.rmit.sepy.fri1.spring.repository;

import org.springframework.data.repository.CrudRepository;
import com.rmit.sepy.fri1.spring.model.Booking;
//this class connects to mysql server
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface BookingRepository extends CrudRepository<Booking, Integer> {

}