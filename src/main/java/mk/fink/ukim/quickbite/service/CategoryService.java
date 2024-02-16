package mk.fink.ukim.quickbite.service;

import mk.fink.ukim.quickbite.entites.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    Optional<Category> saveCategory(Long categoryId, String name);
    List<Category> findAll();
    void deleteById(Long id);
}
