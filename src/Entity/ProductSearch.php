<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;

class ProductSearch {
    /**
     * @var string|null
     */
    private $keyWord;


    private $sortBycategory;

    private $sortByPrice;
    

    /**
     * Get the value of keyWord
     *
     * @return  string|null
     */ 
    public function getKeyWord()
    {
        return $this->keyWord;
    }

    /**
     * Set the value of keyWord
     *
     * @param  string|null  $keyWord
     *
     * @return  self
     */ 
    public function setKeyWord($keyWord)
    {
        $this->keyWord = $keyWord;

        return $this;
    }



    /**
     * Get the value of sortByPrice
     */ 
    public function getSortByPrice()
    {
        return $this->sortByPrice;
    }

    /**
     * Set the value of sortByPrice
     *
     * @return  self
     */ 
    public function setSortByPrice($sortByPrice)
    {
        $this->sortByPrice = $sortByPrice;

        return $this;
    }

    /**
     * Get the value of sortBycategory
     */ 
    public function getSortBycategory()
    {
        return $this->sortBycategory;
    }

    /**
     * Set the value of sortBycategory
     *
     * @return  self
     */ 
    public function setSortBycategory($sortBycategory)
    {
        $this->sortBycategory = $sortBycategory;

        return $this;
    }
}

?>