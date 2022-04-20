package com.msdt.server.util;

import com.msdt.server.model.Contact;
import com.msdt.server.repository.ContactRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ContactRepository contactRepository;

    public DataLoader(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        contactRepository.save(new Contact("Ahmed", "Samy", "samy@mail.com"));
        contactRepository.save(new Contact("Samy", "Ahmed", "ahmed@mail.com"));
    }

}
