// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract VaxCard {

    address public vaxee;

    struct Vax {
        string name;
        string date;
        string vax;
        string vax_type;
        bool vaxed;
    }

    mapping(string => Vax) public vaxers;


    function ping() public view returns(string memory) { 
        return "pong";
    }

    function addVax(string memory _name, string memory _date, string memory _vax, string memory _vax_type, bool _vaxed) public returns(bool) {
        Vax memory newVax = Vax(_name, _date, _vax, _vax_type, _vaxed);
        vaxers[_name] = newVax;
        return true;
    }

    function editVax(string memory _name, string memory _date, string memory _vax, string memory _vax_type, bool _vaxed) public returns(bool) {
        vaxers[_name] = Vax(_name, _date, _vax, _vax_type, _vaxed);
        return true;
    }

    function toggleVax(string memory _name) public returns (string memory, bool) {
        vaxers[_name].vaxed = !vaxers[_name].vaxed;
        return ("toggled", !vaxers[_name].vaxed);
    }
}
