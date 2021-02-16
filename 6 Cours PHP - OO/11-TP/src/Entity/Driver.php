<?php


namespace Entity;


class Driver
{

    //Alt + inser pour générer getter et setter
    private $id;
    private $name;
    private $firstname;

    //alt + entrée sur un argument puis initialize properties
    public function __construct($name, $firstname)
    {
        $this->name = $name;
        $this->firstname = $firstname;
    }


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     * @return Driver
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     * @return Driver
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * @param mixed $firstname
     * @return Driver
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
        return $this;
    }

}