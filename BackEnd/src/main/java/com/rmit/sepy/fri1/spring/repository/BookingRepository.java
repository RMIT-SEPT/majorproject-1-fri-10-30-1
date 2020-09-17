package com.rmit.sepy.fri1.spring.repository;

import org.springframework.data.repository.CrudRepository;
import com.rmit.sepy.fri1.spring.model.Booking;


public interface BookingRepository extends CrudRepository<Booking, Long> {
     @Override
     Iterable<Booking> findAllById(Iterable<Long> iterable);
}