package com.rmit.sepy.fri1.spring.repository;

import com.rmit.sepy.fri1.spring.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
    User getById(Long id);
}
