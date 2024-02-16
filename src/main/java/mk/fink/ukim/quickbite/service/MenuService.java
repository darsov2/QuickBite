package mk.fink.ukim.quickbite.service;

import mk.fink.ukim.quickbite.entites.MenuItem;

import java.util.List;

public interface MenuService {
    List<MenuItem> findAll();
}
