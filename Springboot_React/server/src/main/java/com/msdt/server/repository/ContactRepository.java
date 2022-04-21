package com.msdt.server.repository;

import com.msdt.server.model.Contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
